function hello(name) {
    return name == "" || !name ? "Hello, World!" : "Hello, " + name.charAt(0).toUpperCase() + name.toLowerCase().substring(1) + "!";
    }
