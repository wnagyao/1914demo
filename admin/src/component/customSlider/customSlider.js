import React from 'react'
import {withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd';
const root=[
    {
        name:"首页",
        path:"/admin/home",
        key:"/admin/home"
    },
    {
        name:"设置",
        path:"/admin/setting",
        key:"/admin/setting"
    },
    {
        name:"用户管理",
        path:"/admin/user",
        key:"/admin/user",
        children:[
            {
                name:"1-2",
                path:"/admin/user/2",
                key:"/admin/user/2",
            },
            {
                name:"1-2.1",
                path:"/admin/user/2.1",
                key:"/admin/user/2.1",
                children:[
                    {
                        name:"1-2",
                        path:"/admin/user/2",
                        key:"/admin/user/2",
                    }
                    ]
            }
        ]
    }
]
const {SubMenu} = Menu;

class CustomSlider extends React.Component {
    jump = (path) => {
        this.props.history.push(path)
    };
    renderItem(data){
        return (
            data.map((item)=>{
                if(item.children){
                    return(
                        <SubMenu key={item.key} title={item.name} >
                            {this.renderItem(item.children)}
                        </SubMenu>
                    )
                }else{
                    return (
                            <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                        )
                }
            })
        )
    }
    render() {
        return (
            <Menu style={{width: 256}} mode="vertical" theme='dark'>
                {this.renderItem(root)}
                {/*{root.map((item,index)=>{*/}
                    {/*if(item.children){*/}
                        {/*return (*/}
                            {/*<SubMenu title={item.name}>*/}
                                {/*{item.children.map((citem,index)=>{*/}
                                    {/*return (*/}
                                        {/*<Menu.Item key={citem.key} onClick={this.jump.bind(this,citem.path)}>{citem.name}</Menu.Item>*/}
                                    {/*)*/}
                                {/*})}*/}

                            {/*</SubMenu>*/}
                        {/*)*/}
                    {/*}else {*/}
                        {/*return (*/}
                            {/*<Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>*/}
                        {/*)*/}
                    {/*}*/}
                {/*})}*/}
                {/*<Menu.Item key="1">一级导航 1</Menu.Item>*/}
                {/*<SubMenu*/}
                    {/*title={*/}
                        {/*<span>用户管理</span>*/}
                    {/*}*/}
                {/*>*/}
                    {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                    {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                    {/*<SubMenu title='二级'>*/}
                        {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                        {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                    {/*</SubMenu>*/}
                {/*</SubMenu>*/}
                {/*<SubMenu*/}
                    {/*key="sub1"*/}
                    {/*title={*/}
                        {/*<span><Icon type="mail"/>*/}
                            {/*<span>首页</span>*/}
                        {/*</span>*/}
                    {/*}*/}
                {/*>*/}
                        {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                        {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                {/*</SubMenu>*/}
            </Menu>
        )
    }
}

export default withRouter(CustomSlider)