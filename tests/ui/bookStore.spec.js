import { test, expect } from '@playwright/test';
import { writeBookDetails } from '../../utils/fileWriter';

const USERNAME = 'test@suhas';
const PASSWORD = 'Test1@suhas';
const BOOK_NAME = 'Learning JavaScript Design Patterns';

test('Login, search book, validate and write details', async ({ page }) => {
  await page.goto('https://demoqa.com/books');

  await page.click('#login');

  await page.fill('#userName', USERNAME);
  await page.fill('#password', PASSWORD);
  await page.click('#login');

  await expect(page.locator('#userName-value')).toHaveText(USERNAME);
  await expect(page.locator('#submit')).toHaveText('Log out');

  // Navigate to Book Store
  await page.click('text=Book Store');

  // Search for book
  await page.fill('#searchBox', BOOK_NAME);

  const bookRow = page.locator('.rt-tr-group').first();
  await expect(bookRow).toContainText(BOOK_NAME);

  // Extract details
  const title = await page.locator('a[href*="books"]').first().textContent();
  const author = await page.locator('.rt-td').nth(2).textContent();
  const publisher = await page.locator('.rt-td').nth(3).textContent();

  // Write to file
  writeBookDetails(title.trim(), author.trim(), publisher.trim());

  // Logout
  await page.click('#submit');
});
