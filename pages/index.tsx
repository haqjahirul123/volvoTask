import { HelloWorld } from "../src/components/HelloWorld";
import { StyleProvider, ThemePicker } from 'vcc-ui';
function index() {
    return (
        <div>
            <StyleProvider>
                <ThemePicker variant="light">
                    <HelloWorld/>
                </ThemePicker>
            </StyleProvider>,
            
        </div>
    )
}

export default index
