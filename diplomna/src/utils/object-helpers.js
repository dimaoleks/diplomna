export const updateObjectInArray = (items, itemId, objectPropName) => {

    return items.map(u => {
        if (u[objectPropName] === itemId) {
            debugger;
            let likesCount = 0;
            let isLiked = false;
            if (u.isLiked) {
                likesCount = u.likesCount - 1;
                isLiked = false;
            } else {
                likesCount = u.likesCount + 1;
                isLiked = true;
            }
            return {...u, ...{likesCount, isLiked}};
        }
        return u;
    })
}
