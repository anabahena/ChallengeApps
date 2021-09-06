import { createTheme } from '@material-ui/core/styles';

const baseTheme = {
    typography: {
        fontFamily: [
            'Roboto',
            'Montserrat',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#77BC26',  //dark
        },
        secondary: {
            main: '#FF4646', // '#1493F1',
        },
        grey:{
            light: '#8D8D8D', //main: '#0063be'
            main: '#6E6E70', //main: '#ffffff',
            dark: '#000000',//dark: '#ECEFF1',
        },
        grey2:{

            main: '#606E79',

        },
        blueGray:{
            light: '#ECEFF1',
            main: '#546E7A',
            dark: '#263238',

        },
        green:{
            light: '#E8F5E9',
            main: '#76DE7A',
            dark: '#4CAF50',
        },
        blue:{
            light: '#00E0FF',
            dark: '#5850EC'
        },
        blue2:{
            light: '#E8F1F5',
            main: '#2196F3',
        },
        orange:{
            light: '#FFF3E0',
            main: '#FF9800',
            dark: '#F57C00'
        },
        red:{
            light: '#FEEBEE',
            main: '#E53935',
            dark: '#FF4646'
        },
        red2:{
            main:'#E11B1B',
        }
    },
    zIndex: {
        drawer: 1000
    },
    overrides: {
        MuiTabs: {
            flexContainer: {
                justifyContent: 'center'
            }
        },
        MuiFormControl: {
            root: {
                width: '100%'
            }
        },
        // MuiDialog: {
        //     paper: {
        //         borderRadius: '20px',
        //         margin: '16px'
        //     }
        // },
        MuiAppBar: {
            root: {
                //borderBottom: '2px solid #07BEBE'
                borderBottom: '2px solid #263238'
            }
        },
        MuiCardHeader: {
            action: {
                marginTop: '0'
            }
        },
        MuiButton: {
            containedPrimary: {
                color: '#fff'
            }
        },
        MUIRichTextEditor: {
            container: {
                marginTop: 0,
                padding: '12px'
            },
            inlineToolbar: {
                marginTop: '80px',
                maxWidth: '240px'
            },
            toolbar: {
                whiteSpace: 'nowrap',
                overflowX: 'auto',
                top: '100px',
                position: 'sticky',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                zIndex: 400,
                paddingTop: '4px',
                paddingBottom: '4px',
                MuiIconButton: {
                    padding: 0
                }
            },
            editor: {
                padding: '12px 4px 4px 4px'
            },
            placeHolder: {
                padding: '12px 4px 4px 4px'
            }
        },
        MuiTypography: {
            h3: {
                fontSize: '36px',
                fontWeight: 'bold'
            }
        },
        MuiOutlinedInput: {
            input: {
                '&:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 100px #ffffff inset !important',
                    //WebkitTextFillColor: '#77BC26',
                    //WebkitTextFillColor: '#FFF',

                },
            },
        },
    }
};

const Theme = createTheme({
        ...baseTheme,
        palette: {
            ...baseTheme.palette,
            type: 'light'
        }
    }),
    DarkTheme = createTheme({
        ...baseTheme,
        palette: {
            ...baseTheme.palette,
            type: 'dark',
            background: {
                default: '#fafafa', //'#0f202e',  /// aqui ver colores
                paper: '#fff'
            },
            text:{
                primary: 'rgba(0, 0, 0, 0.87)',
                hover: 'rgba(0, 0, 0, 0.04)'
            },
        },
        overrides: {
            ...baseTheme.overrides,
            MuiOutlinedInput: {
                root:{
                    border: '1px solid rgba(0, 0, 0, 0.24) ' ,
                    color: 'rgba(0, 0, 0, 0.87)'
                },
                input: {
                    '&:-webkit-autofill': {
                        WebkitBoxShadow: '0 0 0 100px #e2e2e2 inset !important',
                        // WebkitTextFillColor: '#6E6E70',
                        WebkitTextFillColor: '#e2e2e2',
                    },
                },
            },
        }
    });

export {Theme, DarkTheme};
