let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

// ------

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// ------

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// -----

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

// ----- Dietary service
let roleInOrg = "Employee";
let authorizationStatus;

switch (roleInOrg) {
    case "Employee":
        authorizationStatus = "Dietary Services";
        break;
    case "Enrolled Member":
        authorizationStatus = "'Dietary Services' and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        authorizationStatus = "Partial access to facilitate 'Dietary Services'";
        break;
    case "Non-Subscriber":
        authorizationStatus = "Subscribe first to avail this facility";
        break;
    default:
        authorizationStatus = "Unknown";
}

console.log("The user is authorized to:", authorizationStatus);
