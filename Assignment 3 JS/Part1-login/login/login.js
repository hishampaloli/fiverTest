"use strict";

const getCookieByName = name => {
    return "";
};

const setCookie = (name, value, days) => {
    sessionStorage.setItem('user', value);
};

const deleteCookie = name => {
    sessionStorage.removeItem('user', name);
};

const goToPage = url => {
    window.location.href = url
};