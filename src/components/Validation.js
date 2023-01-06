
// Form validation - Name
module.exports.allLetter = (givenName) => {
    let letters = /^[A-Za-z]+$/;
    if (givenName.match(letters)) {
        return true;
    }
    else {
        alert("Hmm, try giving a Realistic Name...");
        return false;
    }
}

// Form validation - Roll no is unique
module.exports.isUnique = (num, arr) => {
    let unique = true;
    arr.map((element) => {
        if (num === element.rollNo) {
            unique = false;
            alert("Don't you think Roll numbers should be unique!")
        }
        return 0
    })
    return unique;
}

// Form validation - Roll no in range of 0 to 500
module.exports.inRange = (num) => {
    if (num >= 0 && num <= 500) {
        return true
    } else {
        alert('Roll Numbers should always be in Range(i.e. 0 to 500)')
        return false
    }
}

// Form beautification - Name is capitalized
module.exports.toCamelCase = (str) => {
    return str.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

// checking whether given Roll no is present ?
module.exports.foundNum = (num, arr) => {
    let unique = true;
    arr.map((element) => {
        if (num === element.rollNo) {
            unique = false;
        }
        return 0
    })
    return unique;
}

// To count Total number of Students Present and have not checked out
module.exports.countPresentStudents = (arr) => {
    let count = 0;
    arr.map((element) => {
        if (element.checkOut === 'PRESENT') {
            count++
        }
        return 0
    })
    return count
}


