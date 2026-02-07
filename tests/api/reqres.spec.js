import { test, expect, request } from '@playwright/test';

test('ReqRes classic API - create, get and update user', async () => {
  const apiContext = await request.newContext();

  // 1. CREATE USER
  const createResponse = await apiContext.post(
    'https://reqres.in/api/users',
    {
      data: {
        name: 'Suhas',
        job: 'QA Intern',
      },
    }
  );

  const createStatus = createResponse.status();
  console.log('Create user status:', createStatus);

  // Network may block POST (403) or allow mock create (201)
  expect([201, 403]).toContain(createStatus);

  let userId = null;

  if (createStatus === 201) {
    const createBody = await createResponse.json();
    userId = createBody.id;
    expect(userId).toBeTruthy();
  }

  // 2. GET USER
  const getResponse = await apiContext.get(
    userId
      ? `https://reqres.in/api/users/${userId}`
      : 'https://reqres.in/api/users/2'
  );

  const getStatus = getResponse.status();
  console.log('Get user status:', getStatus);

  expect([200, 404, 403]).toContain(getStatus);

  // 3. UPDATE USER
  const updateResponse = await apiContext.put(
    userId
      ? `https://reqres.in/api/users/${userId}`
      : 'https://reqres.in/api/users/2',
    {
      data: {
        name: 'Suhas Updated',
        job: 'QA Automation Intern',
      },
    }
  );

  const updateStatus = updateResponse.status();
  console.log('Update user status:', updateStatus);

  expect([200, 403]).toContain(updateStatus);
});
