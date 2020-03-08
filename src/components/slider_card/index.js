module.exports = get;

function get(items) {

    for (let i of items) {
        vals.push(format(i))
    }
    return vals;
}

function format(params) {
    return {
        src: params.src,
        header: params.header,
        description: params.description
    }
}

function getFormat() {

}