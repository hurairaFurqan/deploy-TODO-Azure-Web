export const mockUsers = [
    {
        id: 1,
        firstName: "mark",
        lastName: "john",
        email: "mark@example.com",
        password: "password1",
    },
    {
        id: 2,
        firstName: "naomi",
        lastName: "naruto",
        email: "naomi@example.com",
        password: "password2",
    },
];

export const loginUser = async (email, password) => {
    // Simulate API call to check user credentials
    const user = mockUsers.find(
        (user) => user.email === email && user.password === password
    );
    return user ? user : null;
};

export const registerUser = async (firstName, lastName, email, password) => {
    // Simulate API call to register a new user
    const newUser = {
        id: mockUsers.length + 1,
        firstName,
        lastName,
        email,
        password,
    };
    mockUsers.push(newUser);
    return newUser;
};
