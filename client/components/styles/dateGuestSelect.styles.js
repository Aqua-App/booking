// import styled, { css } from 'styled-components';
const {styled} = global;
const {css} = styled;

export const CalendarContainer = styled.div`
display: grid;
box-sizing: border-box;
height: 112px;
max-width: 322px;
width: 100%;
align-self: center;
grid-area: calendar;
grid-template-columns: 1fr 1fr;
grid-template-rows: 50% 50%;
grid-template-areas:  "checkin checkout"
                      "guest guest";
position: relative;
`;

export const Checkin = styled.div`
grid-area: checkin;
border: 1px solid	#717171;
border-radius: 15px 0 0 0;
padding: 11px;
font-size: 12px;
cursor: pointer;
align-self: center;
`;

export const Checkout = styled.div`
grid-area: checkout;
border: 1px solid #717171;
border-radius: 0 15px 0 0;
padding: 11px;
font-size: 12px;
cursor: pointer;
align-self: center;
`;

export const Div = styled.div`
color: #717171;
font-size: 14px;
`;