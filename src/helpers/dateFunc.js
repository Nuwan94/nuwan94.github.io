export const sortByDate = (arr, prop) => {
    return arr.sort((a, b) => {
        let c = new Date(a[prop]);
        let d = new Date(b[prop]);
        return c < d;
    });
};