import { Text } from '@fluentui/react-components'
import React from 'react'
import useCurrentRoute from 'src/hooks/Navigation/useCurrentRoute'

interface IPageTitleBar {

}

const PageTitleBar = () => {

    const { description } = useCurrentRoute();
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                height: "59px",
                backgroundColor: "white",
                color: "black",
                gap: "12px",
                position: "fixed",
                width: "100%",
                zIndex: "1000",
                // marginLeft: "-15px",
                paddingLeft: "15px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "0px",
            }}
        >
            {/* <Icon
                style={{
                    fontSize: "22px",
                    backgroundColor: "#f1f1f1",
                    color: "#F15D22",
                    padding: "5px",
                    borderRadius: "5px",
                    marginTop: "2px",
                }}
            /> */}
            <Text
                style={{
                    fontFamily: "sans-serif",
                    fontSize: "1.7vh",
                    fontWeight: "bold",
                    marginTop: "8px",
                    color: "#1357A5",
                }}
            >
                {description}
            </Text>

        </header>
    )
}

export default React.memo(PageTitleBar)