import styled from 'styled-components';

export const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04AA6D;
  color: white;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;