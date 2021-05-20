(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[102],{1324:function(n,e,t){"use strict";t.r(e),e.default="DateInput \u65e5\u671f\u8f93\u5165\u6846\n===\n\n\u663e\u793a\u4e00\u4e2a\u6708\u7684\u65e5\u5386\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u9009\u62e9\u5355\u4e2a\u65e5\u671f\u3002\n\n```jsx\nimport { DateInput } from 'uiw';\n// or\nimport DateInput from '@uiw/react-date-input';\n```\n\n## \u57fa\u672c\u4f7f\u7528\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { DateInput, Row, Col } from 'uiw';\n\nclass Demo extends React.Component {\n  onChange(selectedDate) {\n    console.log('selectedDate:', selectedDate)\n  }\n  render() {\n    return (\n      <Row gutter={10} style={{ maxWidth: 360 }}>\n        <Col fixed>\n          <DateInput\n            value={new Date()}\n            datePickerProps={{ todayButton: '\u4eca\u5929' }}\n            onChange={this.onChange.bind(this)}\n          />\n        </Col>\n        <Col>\n          <DateInput\n            value={new Date()}\n            disabled\n            onChange={this.onChange.bind(this)}\n          />\n        </Col>\n      </Row>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u5728\u8868\u5355\u4e2d\u4f7f\u7528\n\n\u5728 [`<Form />`](#/components/form) \u8868\u5355\u4e2d\u5e94\u7528 [`<DateInput />`](#/components/date-input) \u7ec4\u4ef6\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { DateInput, Notify, Button, Form, Row, Col } from 'uiw';\n\nReactDOM.render(\n  <Form\n      onSubmit={({initial, current}) => {\n        if(current.date) {\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a${current.date}`,\n          });\n        } else {\n          Notify.error({\n            title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a${current.date}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n          });\n        }\n        console.log('--\x3e>', initial, current);\n      }}\n      fields={{\n        date: {\n          initialValue: '2019/02/17',\n          labelClassName: 'fieldLabel',\n          labelFor: 'date-inline',\n          children: <DateInput datePickerProps={{ todayButton: '\u4eca\u5929' }} id=\"date-inline\" />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <Row gutter={10}>\n            <Col fixed>{fields.date}</Col>\n            <Col>\n              <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n            </Col>\n          </Row>\n        )\n      }}\n    </Form>,\n  _mount_\n);\n```\n\n## \u65e5\u671f\u683c\u5f0f\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { DateInput } from 'uiw';\n\nclass Demo extends React.Component {\n  onChange(selectedDate) {\n    console.log('selectedDate:', selectedDate);\n  }\n  render() {\n    return (\n      <div style={{ maxWidth: 200 }}>\n        <DateInput\n          format=\"YYYY # MM # DD\"\n          datePickerProps={{ todayButton: '\u4eca\u5929' }}\n          onChange={this.onChange.bind(this)}\n        />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u65e5\u671f\u65f6\u95f4\u8bbe\u7f6e\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { DateInput } from 'uiw';\n\nclass Demo extends React.Component {\n  onChange(selectedDate) {\n    console.log('selectedDate:', selectedDate);\n  }\n  render() {\n    return (\n      <div style={{ maxWidth: 200 }}>\n        <DateInput\n          format=\"YYYY/MM/DD HH:mm:ss\"\n          datePickerProps={{ showTime: true, todayButton: '\u4eca\u5929' }}\n          onChange={this.onChange.bind(this)}\n        />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u521d\u59cb\u65f6\u95f4\u503c | Date | - |\n| placeholder | \u8f93\u5165\u6846\u63d0\u793a\u6587\u5b57 | String | - |\n| allowClear | \u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae | Boolean | true |\n| format | \u683c\u5f0f\u5316\u65f6\u95f4\uff0c\u89c4\u5219\u67e5\u770b [`<formatter>`](#/components/formatter) \u6587\u6863 | String | `YYYY/MM/DD` |\n| onChange | \u9009\u62e9\u4e00\u5929\u65f6\u8c03\u7528\u3002 | Function(selectedDate:Date) | - |\n| popoverProps | \u5c06\u53c2\u6570\u4f20\u9012\u7ed9 [`<Popover>`](#/components/popover) \u7ec4\u4ef6 | Object | - |\n| datePickerProps | \u5c06\u53c2\u6570\u4f20\u9012\u7ed9 [`<DatePicker>`](#/components/date-picker) \u7ec4\u4ef6 | Object | - |\n| disabled | \u7ec4\u4ef6 [`<Input>`](#/components/input) \u7684\u5c5e\u6027\uff0c\u7981\u7528\u65e5\u5386 | Boolean | - |\n\n\u66f4\u591a\u5c5e\u6027\u6587\u6863\u8bf7\u53c2\u8003 [`<Input>`](#/components/input)\u3002\n"}}]);
//# sourceMappingURL=102.31d25c85.chunk.js.map