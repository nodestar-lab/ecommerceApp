module.exports = get;

function get(items) {
    let vals = [];
    for (let i of items) {
        vals.push(format(i));
    }
    return vals;
}

function format(params) {
    return {
        link: params.link,
        height: params.height,
        width: params.width
    };
}