"use client";
import { store } from "@/store";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

function ReduxProvider({ children} : PropsWithChildren) {
    return <Provider store={store}> {children} </Provider>
}

export default ReduxProvider