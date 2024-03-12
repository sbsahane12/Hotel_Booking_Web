const User = require('./models/user');

// Assuming you have a createAdminUser function defined somewhere
async function createAdminUser() {
    try {
        // Check if the admin user already exists
        const existingAdmin = await User.findOne({ username: 'admin' });

        // If admin user doesn't exist, create a new one
        if (!existingAdmin) {
            const adminData = {
                username: 'admin',
                email: 'admin@example.com',
                password: 'adminpassword', // Make sure to hash this in a real application
                isAdmin: true // Set a flag to indicate admin status
            };

            // Create the admin user
            const adminUser = await User.create(adminData);
            console.log('Admin user created:', adminUser);
        } else {
            console.log('Admin user already exists:', existingAdmin);
        }
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
}

// Call the function to create the admin user
createAdminUser();