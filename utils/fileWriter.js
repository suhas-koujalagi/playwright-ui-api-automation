import fs from 'fs';
import path from 'path';

export function writeBookDetails(title, author, publisher) {
  const filePath = path.join(process.cwd(), 'output', 'bookDetails.txt');

  const content = `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`;

  fs.writeFileSync(filePath, content);
}
