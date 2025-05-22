export const infor = (state) => {
    return {
        type: "getInfor",
        infor: state
    };
}

export const productForUser = (state) => {
    return {
        type: "listProductForUser",
        listProduct: state
    }
}

export const addCart = (state) => {
    return {
        type: "addCart",
        cartItem: state
    }
}

export const removeItem = (state) => {
    return {
        type: "removeItem",
        cartItem: state
    }
}

export const createCart = (state) => {
    return {
        type: "createCart",
        cartItem: state
    }
}