export const Phone = (value) =>{
    return {
        type:value
    };
};

export const Product = (type,currentProductName) =>{
    return {
        type,
        current:currentProductName
    };
};

export const GetCards = () =>{
    return {
        type:"GetCards"
    };
};