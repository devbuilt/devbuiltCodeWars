function hello(name) {
    if (name === undefined || name === '') {
        return "Hello, World!";
    } else {
        let n = name.toLowerCase();
        let n1 = n.charAt(0).toUpperCase() + n.slice(1);
        return "Hello, " + n1 + "!";
    }
}