# Rails, React, Redux setup workshop

## Get started

Create a directory.

    mkdir rails-react-redux-setup
    cd rails-react-redux-setup

Initialize git.

    git init


## Install ruby

    rbenv install 2.4.2
    rbenv local 2.4.2


## Install rails

    touch Gemfile

Copy these few lines into your `Gemfile`.

    source 'https://rubygems.org'
    gem 'rails', '~> 5.1'

Install rails and overwrite existing files.

    bundle install
    bundle exec rails new . --force --skip-spring --skip-turbolinks --skip-coffee --skip-test

Notice we don't use the `--webpack=WEBPACK` flag; this may change in the future.

Start your rails server.

    bundle exec rails s

Visit `localhost:3000`.


## Install rspec

Add rspec to your `Gemfile`.

    group :development, :test do
      gem 'rspec-rails', '~> 3.6'
    end

And install it.

    bundle install
    bundle exec rails generate rspec:install

Ensure rspec can run.

    bundle exec rspec


## Install nvm

    brew install nvm  # assuming macOS with homebrew
    nvm install v6.9.1
    nvm use v6.9.1

Verify node works.

    node -v

Create `.nvmrc` which is similar to `ruby-version`.

    touch .nvmrc
    echo '6.9.1' >> .nvmrc


## Install yarn

    brew install yarn  # assuming macOS with homebrew

Verify.

    yarn -v


## Install react

Choose between `react-rails` and `react_on_rails`.

https://github.com/reactjs/react-rails
https://github.com/shakacode/react_on_rails

Add these gems to your `Gemfile`.

    gem 'react_on_rails', '10.0.0'
    gem 'webpacker', '~> 3.0'

Install the gems.

    bundle install

Run the `webpacker` generators.

    bundle exec rails webpacker:install
    bundle exec rails webpacker:install:react

Commit this to git (or else you cannot run the generator unless you pass the option `--ignore-warnings`).

See help for the generator.

    bundle exec rails generate react_on_rails:install --help

Install `react_on_rails` with `redux` included.

    bundle exec rails generate react_on_rails:install --redux

You should see some output similar to:

    What to do next:

      - See the documentation on https://github.com/rails/webpacker/blob/master/docs/webpack.md
        for how to customize the default webpack configuration.

      - Include your webpack assets to your application layout.

          <%= javascript_pack_tag 'hello-world-bundle' %>

      - Run `rails s` to start the Rails server and use Webpacker's default lazy compilation.

    Run the react_on_rails generator

      - Visit http://localhost:3000/hello_world and see your React On Rails app running!

      - Run bin/webpack-dev-server to start the Webpack dev server for compilation of Webpack
        assets assets as soon as you save. This default setup with the dev server does not work
        for server rendering

      - Alternately, you may turn off compile in config/webpacker.yml and run the foreman
        command to start the rails server and run webpack in watch mode.

          foreman start -f Procfile.dev

      - To turn on HMR, edit config/webpacker.yml and set HMR to true. Restart the rails server
        and bin/webpack-dev-server. Or use Procfile.dev-server.

      - To server render, change this line app/views/hello_world/index.html.erb to
        `prerender: true` to see server rendering (right click on page and select "view source").

          <%= react_component("HelloWorldApp", props: @hello_world_props, prerender: true) %>


Install any new gems (i.e. `mini_racer`).

    bundle install

Restart rails server.

    bundle exec rails s

And visit `http://localhost:3000/hello_world`.


## Setup javascript testing

    yarn add --dev jest enzyme react-test-renderer

Add scripts to your `package.json`.

    "scripts": {
      "test": "jest app",
      "test:watch": "jest app --onlyChanged --watch"
    },

And then run tests to verify.

    yarn test


## Create a simple test

    touch app/javascript/bundles/HelloWorld/components/__tests__/HelloWorld.test.jsx

And add the following.

    it ('works', () => {
      expect(true).toEqual(true)
    })

Then run your tests.

    yarn test
