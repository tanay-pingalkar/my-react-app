![logo](https://github.com/tanay-pingalkar/my-react-app/blob/main/public/logo.svg)

## A react typescript boilerplate made from scratch

<h4> that uses react / typescript / scss / redux / react-router-dom / jest / react-testing-library / eslint / prettier.</h4>

## setting up on your machine

- fork this repo
- clone the forked repo
- run `yarn`
- run `yarn serve`

## commands

- `yarn serve` to serve the app for developement
- `yarn build` to build app for production
- `yarn test` to start jest testing
- `yarn format` to format code in prettier
- `yarn format:check` to check if code style matches only
- `yarn format:write` to prettify your code only
- `yarn lint` to lint your code in eslint
- `yarn lint:fix` to fix code in eslint
- `yarn test` to test code in jest

## file structure
```
.
├── .github
|   └── workflow
|       └── ...
├── .vscode
|   └── ...
├── src
|   ├── components
|   |   └── ...
|   ├── redux
|   |   ├── actions
|   |   ├── reducers
|   |   └── ...
|   ├── styles
|   |   └── ...
|   ├── utils
|   |   └── ...
|   └── ...
├── tests
|   ├── __snapshot
|   └── ...
├── webpack
|   └── ...
└── ...
```

## how do you write tests
this repo can also be usefull for test first driven testing method, it uses jest / react-testing-library / react-test-renderer. It also contain how to test redux.
I have made custom util to create test store  not redux mock store because it is only for testing action based logic not reducer. A simple test example
``` tsx
it("should render component properly",()=>{
  // createTestStore is a utility in src/utils folder
  const store=createTestStore();
  
  // you can also spyOn store.dispatch
  const spy = jest.spyOn(store,"dispatch");
  render(
      <MemoryRouter>
        <Provider store={store}>
          <Component></Component>
        </Provider>
      </MemoryRouter>,
   );
   const element =screen.fintByTestId("test_id");
   expect(element).toHaveTextContent("first content");
   act(()=>{
    fireEvent.click(add);
   })
   expect(spy).toHaveCalled();
   expect(element).toHaveTextContent("changed content after click");
});
```

## webpack explained
this repo uses webpack to bundle scss , typescript and file. webpack folder contain three webpack configs, webpack.config.ts is main config which is merged in other config based on mode. There are two mode, developement and production. In developement mode hmr is in use and in production, minification of the code in done. this repo use ts-loader to load typescript, scss-loader / css-loader to load css and mini-css-extract-plugin creates a seperate css file. To use hmr, this repo use [react-hot-replacer](https://github.com/gaearon/react-hot-loader).

## github action
there is a github action in .github to continuosly check code quality. I have set of instruction like `yarn lint` , `yarn format`, `yarn test`.

## react , redux , react-router-dom
this repo is a [react](https://reactjs.org/) boilerplate and uses redux for statemanagement. If you dont know redux visit there [doc](https://redux.js.org/); For routing it uses [react router dom](https://reactrouter.com/web/guides/quick-start). If you are using react-router-dom and you project is growing , you can create a folder called pages in src where you can store all routes.


## using vscode tasks
this repo recommend using vscode to get full advancement code linting and formating. With linting and formating , i have also made vscode tasks that you can run from your vscode. go to terminal > Run task > you will get list of tasks , run one of them.
