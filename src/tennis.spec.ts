import {Tennis} from "./tennis";

describe('Test Tennis', () => {

    it('should return love all', () => {
        const testee = new Tennis();
        expect(testee.getScore()).toEqual('love - love');
    });
});
