import React from 'react';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Tests in Counter App', () => {

    let wrapper = shallow(<CounterApp />);
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('CounterApp should match with its snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
    test("CounterApp's text should match with the number provided", () => {
        
        const wrapper = shallow(<CounterApp value={100}/>);
        const value = wrapper.find('h2').text();
        
        expect(value).toBe('100');

    })

    test('should increase by touching the button +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('1');

    });

    test('should decrease by touching the button -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('-1');
    });
    
    test('should reset by touching the button reset', () => {

        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    });

})
