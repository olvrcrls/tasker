import Vue from 'vue'

// Require in a base component context
const requireComponent = require.context('./base', false, /\.vue$/i)


requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get Pascal Case / Camel Case name of component
    // const componentName = upperFirst(fileName.replace(/^\. \//, '').replace(/\. \w+$/, ''))
    
    // Skipping the Pascal / Camelcase
    const componentName = fileName.split('/').pop().split('.')[0]
    
    // Registering the component globally
    Vue.component(componentName, componentConfig.default || componentConfig)
})