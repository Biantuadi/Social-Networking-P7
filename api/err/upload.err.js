module.exports.uploadErrors = (err) => {
    let errors = {format : "", maxSize : ""};

    if (err.message.includes("invalid file")) {
        errors.format = "invalid file";
    }
    if (err.message.includes("max size")) { 
        errors.maxSize = "max size";
    }

    return errors;
}