import styled from "styled-components";

const TableStyle = styled.section`

    
    table {
      width: min(90%, 73.1rem);
      margin-inline: auto;
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
      }

      tr:first-of-type {
        border-bottom: 1px solid ${({ theme }) => theme.colors.black};
      }
    }

    th,
    td {
      text-align: start;
      padding-block: 2rem;
    }

    th {
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.6rem;
      letter-spacing: 0.2rem;
      color: ${({ theme }) => theme.colors.black};
      padding-left: 2rem;
    }

    td {
      width: 12rem;
      text-align: center;
    }

    .category {
      text-align: center;
      padding-left: 0;
    }
  
`;

export default TableStyle;

