const mockUsers = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
];

export const loginUser = async (email, password) => {
    // Simulate API call to check user credentials
    const user = mockUsers.find(user => user.email === email && user.password === password);
    return user ? user : null;
};

export const registerUser = async (email, password) => {
    // Simulate API call to register a new user
    const newUser = { id: mockUsers.length + 1, email, password };
    mockUsers.push(newUser);
    return newUser;
};