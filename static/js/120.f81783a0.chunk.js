(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[120],{1344:function(n,t,o){"use strict";o.r(t),t.default="Notify \u6d88\u606f\u901a\u77e5\n===\n\n\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\n\n```jsx\nimport { Notify } from 'uiw';\n// or\nimport Notify from '@uiw/react-notify';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.open({ title: '\u6253\u5f00\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u6ca1\u6709\u72b6\u6001\u989c\u8272\u56fe\u6807\u3002' });\n        }}\n      >\n        \u6253\u5f00\u901a\u77e5\n      </Button>\n      <Button\n        type=\"success\"\n        onClick={() => {\n          Notify.success({ title: '\u6210\u529f\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u6210\u529f\u901a\u77e5\n      </Button>\n      <Button\n        type=\"warning\"\n        onClick={() => {\n          Notify.warning({\n            title: '\u8b66\u544a\u901a\u77e5',\n            description: '\u8fd9\u662f\u4e00\u4e2a\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002'\n          });\n        }}\n      >\n        \u8b66\u544a\u901a\u77e5\n      </Button>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          Notify.info({ title: '\u8bf4\u660e\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u8bf4\u660e\u901a\u77e5\n      </Button>\n      <Button\n        type=\"danger\"\n        onClick={() => {\n          Notify.error({ title: '\u9519\u8bef\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u9519\u8bef\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n### \u5f39\u51fa\u4f4d\u7f6e\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.success({ placement: 'topLeft', title: '\u6210\u529f\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2196\u4e0a\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002',\n            onClose: () => {\n              console.log('~~~~>')\n            }\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.info({ placement: 'bottomLeft', title: '\u8bf4\u660e\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', title: '\u9519\u8bef\u901a\u77e5', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u5f39\u51fa\u901a\u77e5\u4e0d\u6d88\u5931\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.success({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            duration: null,\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u5f39\u51fa\u901a\u77e5\u4e0d\u6d88\u5931\u3002'\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u6807\u9898\u4e0d\u5c55\u793a\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            duration: null,\n            description: '\u6807\u9898\u4e0d\u5c55\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed\u6309\u94ae\u5173\u95ed\u3002',\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.info({ placement: 'bottomLeft', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2199\u4e0b\u5de6\u5f39\u51fa\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u53ea\u5c55\u793a\u6807\u9898\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            duration: null,\n            title: '\u8b66\u544a\u901a\u77e5\uff0c\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u53ea\u5c55\u793a\u6807\u9898\uff0c\u70b9\u51fb\u6309\u94ae\u5173\u95ed\u3002',\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4e0d\u5c55\u793a\u56fe\u6807\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', icon: null, description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002' });\n        }}\n      >\n        \u2198\u4e0b\u53f3\u901a\u77e5\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.success({\n            placement: 'topRight',\n            title: '\u8b66\u544a\u901a\u77e5',\n            icon: null,\n            duration: null,\n            description: '\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002'\n          });\n        }}\n      >\n        \u2197\u4e0a\u53f3\u5f39\u51fa\u901a\u77e5\n      </Button>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Notify\n\n```js\nNotify.open(config);\nNotify.success(config);\nNotify.warning(config);\nNotify.info(config);\nNotify.error(config);\n```\n\n\u53c2\u6570 `config` \u5982\u4e0b\uff1a\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| title | \u901a\u77e5\u63d0\u9192\u6807\u9898\uff0c\u5fc5\u9009 | String/ReactNode | ReactNode |\n| icon | \u8bbe\u7f6e\u4e3a `false` \u5c06\u4e0d\u663e\u793a\u56fe\u6807 | String/ReactNode | ReactNode |\n| description | \u901a\u77e5\u63d0\u9192\u5185\u5bb9\uff0c\u5fc5\u9009 | String/ReactNode | ReactNode |\n| duration | \u9ed8\u8ba4 `4.5` \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u914d\u7f6e\u4e3a `null` \u5219\u4e0d\u81ea\u52a8\u5173\u95ed | Number | `4.5` |\n| placement | \u5f39\u51fa\u4f4d\u7f6e\uff0c\u53ef\u9009 | Enum{`topLeft`, `topRight`, `bottomLeft`, `bottomRight`} | `topRight` |\n| onClose | \u5f53\u63d0\u9192\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570 | Function | none |\n\n\u66f4\u591a\u5c5e\u6027\u6587\u6863\u8bf7\u53c2\u8003 [`<Alert>`](#/components/alert)\u3002\n"}}]);
//# sourceMappingURL=120.f81783a0.chunk.js.map