export const updateObjectInArray = (items, itemId, objectPropName) => {

    return items.map(u => {
        if (u[objectPropName] === itemId) {
            let likes = 0;
            let isLiked = false;
            if (u.isLiked) {
                likes = u.likes - 1;
                isLiked = false;
            } else {
                likes = u.likes + 1;
                isLiked = true;
            }
            return {...u, ...{likes, isLiked}};
        }
        return u;
    })
}
