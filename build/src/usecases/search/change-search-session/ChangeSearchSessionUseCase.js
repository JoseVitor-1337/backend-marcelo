"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChangeSearchSessionUseCase {
    constructor(changeSearchSession) {
        this.changeSearchSession = changeSearchSession;
    }
    async update(searchId, open) {
        if (open) {
            await this.changeSearchSession.open(searchId);
        }
        else {
            await this.changeSearchSession.close(searchId);
        }
    }
}
exports.default = ChangeSearchSessionUseCase;
