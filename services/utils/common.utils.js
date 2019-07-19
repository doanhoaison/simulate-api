export const getFullName = (user) => {
    let fullName = `${user.lastName || ''} ${user.firstName || ''} `;
    return fullName.trim()
}