import React from "react"
import { Form } from "../../components/form"
import { Counter } from "../../components/counter"
import { HeaderPage } from "../../components/header"
import { List } from "../../components/list"

export const PageProfile = () => {
    return(
    <>
        <HeaderPage/>
        <Form/>
        <Counter/>
        <List/>
    </>
    )
}