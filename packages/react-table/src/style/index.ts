import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export interface TableBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {}

export interface TableWrapBaseProps extends TableBaseProps {
  params?: {
    bordered?: boolean;
  };
}

export interface TableColProps extends TableBaseProps {
  params?: {
    align?: 'left' | 'center' | 'right';
    fixed?: boolean | 'left' | 'right';
  };
}

export interface TableColContentProps extends TableBaseProps {
  params: {
    ellipsis?: boolean;
  };
}

export interface TableFooterProps extends TableBaseProps {
  params?: {
    bordered?: boolean;
  };
}

export const TableBaseDefaultTheme = {
  borderColorTable: '#dfe2e5',
  backgroundColorTableFooter: ' #fafafa',
  borderBottomColorTableRows: '#e8e8e8',
  backgroundColorTableTr: 'transparent',
  backgroundColorTable: '#fff',
  backgroundColorTableEvenRows: '#f9f9f9', // 偶数行背景颜色
  backgroundColorTableEvenRowsHover: '#efefef', // 偶数行Hover背景颜色
  backgroundColorTableHead: '#f6f9fb', // 表头背影色
  borderRightColorFixedRows: '#f0f0f0', // 固定列
};

export const TableWrap = styled.div<TableWrapBaseProps>`
  > table {
    display: table !important;
    margin: 0 !important;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    tr > th,
    tr > td {
      border: 0;
      padding: 5px 8px;
      border-bottom: 1px solid ${(props) => getThemeVariantValue(props, 'borderBottomColorTableRows')};
    }
    tr {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTableTr')};
    }
    > caption {
      text-align: left;
      padding: 10px 8px;
    }
    > tbody > tr {
      transition: all 0.3s;
      > td {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTableTbodyTrTd')};
        position: relative;
        z-index: 1;
      }
      &:hover,
      &:hover:nth-child(2n) {
        > td {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTableEvenRowsHover')};
        }
      }
      &:nth-child(2n) {
        > td {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTableEvenRows')};
        }
      }
    }
    > thead {
      > tr > th {
        font-weight: normal;
        padding: 8px;
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTableHead')};
        position: relative;
        z-index: 1;
      }
      > tr,
      tr:nth-child(2n) {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTableHead')};
        border: transparent;
      }
    }
  }
  ${(props) =>
    props?.params?.bordered &&
    css`
      > table {
        tr > th,
        tr > td,
        > caption {
          border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorTable')};
        }
        > caption {
          border-bottom: 0;
        }
      }
    `}
`;
TableWrap.defaultProps = { defaultTheme: TableBaseDefaultTheme };

export const TheadWrap = styled.thead``;
export const TheadItem = styled.th``;

// 单元格
export const TableCol = styled.td<TableColProps>`
  text-align: ${(props) => props?.params?.align};
  ${(props) =>
    props?.params?.fixed &&
    (props?.params?.fixed === 'right'
      ? css`
          position: sticky !important;
          z-index: 2 !important;
          // border: 0; 透风 1px
          &::after {
            box-shadow: inset -10px 0 8px -8px rgb(0 0 0 / 15%);
            position: absolute;
            top: 0;
            bottom: -1px;
            left: 0;
            width: 30px;
            transform: translateX(-100%);
            transition: box-shadow 0.3s;
            content: '';
            pointer-events: none;
            border-right: 1px solid ${(props) => getThemeVariantValue(props, 'borderRightColorFixedRows')};
            /* border-right: 1px solid #f0f0f0; */
          }
          // 暂时没有看到left
        `
      : css`
          position: sticky !important;
          z-index: 2 !important;
          // border: 0; 透风 1px
          &:after {
            box-shadow: inset 10px 0 8px -8px rgb(0 0 0 / 15%);
            position: absolute;
            top: 0;
            right: 0;
            bottom: -1px;
            width: 30px;
            transform: translateX(100%);
            transition: box-shadow 0.3s;
            content: '';
            pointer-events: none;
          }
        `)}
`;
TableCol.defaultProps = { defaultTheme: TableBaseDefaultTheme };

export const TableColContent = styled.span<TableColContentProps>`
  ${(props) =>
    props?.params?.ellipsis &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: keep-all;
      display: block;
    `}
`;
TableColContent.defaultProps = { defaultTheme: TableBaseDefaultTheme };

export const TableFooter = styled.div<TableFooterProps>`
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorTableFooter')};
  padding: 10px 8px;
  ${(props) =>
    props.params?.bordered &&
    css`
      & {
        border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorTable')};
        border-top: 0;
      }
    `}
`;
TableFooter.defaultProps = { defaultTheme: TableBaseDefaultTheme };
