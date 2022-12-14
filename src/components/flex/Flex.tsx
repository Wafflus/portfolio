import { FlexStyled } from "./styles";
import { IFlex, IFlexProps, IFlexStyledProps } from "./types";

const flexDefaultProps: IFlex = {
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0',
    justifyContent: 'space-between',
    maxWidth: '100%'
};

const flexStyleDefaultProps: IFlexStyledProps = {
    defaultFlexProps: flexDefaultProps,
    largeBreakpointFlexProps: flexDefaultProps
};

export function Flex({ children, flexStyleProps: flexStylesProps = flexStyleDefaultProps }: IFlexProps) {
    const defaultProps = { ...flexStyleDefaultProps.defaultFlexProps, ...flexStylesProps.defaultFlexProps };
    const largeBreakpointProps = { ...defaultProps, ...flexStylesProps.largeBreakpointFlexProps };

    return (
        <FlexStyled defaultFlexProps={defaultProps} largeBreakpointFlexProps={largeBreakpointProps}>
            {children}
        </FlexStyled>
    );
}