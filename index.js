(function() {
    'use strict';

    let locate = function(values, lookingFor) {
        if (values.indexOf(lookingFor) != -1) {
            return true;
        }

        return values.some(function(value) {
            return Array.isArray(value) && locate(value, lookingFor);
        });
    }

    module.exports = locate;

})();
