System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserJobs;
    return {
        setters:[],
        execute: function() {
            UserJobs = (function () {
                function UserJobs(title, place) {
                    this.title = title;
                    this.place = place;
                }
                return UserJobs;
            }());
            exports_1("UserJobs", UserJobs);
        }
    }
});

//# sourceMappingURL=jobs.js.map
