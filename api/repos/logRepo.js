"use strict";
var getConnection = require("../../server").getConnection;

exports.getAllLogs = () => {
    return new Promise((resolve, reject) => {
        getConnection().then((con) => {
            con.query("SELECT * FROM ArkFaucet.Logs", function(err, rows) {
                con.release();
                if(!err)
                    resolve(rows);
                reject(err);
            });
        });
    });
};

exports.addLog = (log) => {
    return new Promise((resolve, reject) => {
        getConnection().then((con) => {
            con.query("INSERT INTO ArkFaucet.Logs SET ? ", log, function(err, rows) {
                con.release();
                if(!err)
                    resolve(rows);
                reject(err);
            });
        });
    });
};

