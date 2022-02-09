const TIMEOUT = 2500;
const SUCCESS_STATUS = 'OK';
const FORBIDDEN_STATUS = 'FORBIDDEN';
const USER_KEY = 'user_key';

const saveUser = (users: any) => localStorage.setItem(USER_KEY, users);

export const readUser = async () => {
  return localStorage.getItem(USER_KEY);
};

const simulateRequest =
  (response: string) => (callback: (arg0: any) => void) => {
    setTimeout(() => {
      callback(response);
    }, TIMEOUT);
  };

export const doCreateUser = (user: any) =>
  new Promise(async resolve => {
    var users: any[] = [];
    const savedUsers = await readUser();

    if (savedUsers) {
      const recoveredUsers = JSON.parse(savedUsers);
      users = [...recoveredUsers];
    }

    users.push(user);

    await saveUser(JSON.stringify(users));
    simulateRequest(SUCCESS_STATUS)(resolve);
  });

export const doLogin = (user: any) =>
  new Promise(async resolve => {
    const savedUsers = await readUser();

    if (!savedUsers) {
      return simulateRequest(FORBIDDEN_STATUS)(resolve);
    }

    const arraySavedUsers = JSON.parse(savedUsers);

    if (
      arraySavedUsers.some(
        (existentUser: {password: any}) =>
          user.password === existentUser.password,
      )
    ) {
      simulateRequest(SUCCESS_STATUS)(resolve);
    } else {
      simulateRequest(FORBIDDEN_STATUS)(resolve);
    }
  });
