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
    bundle exec rails new . --force --skip-spring --skip-turbolinks --skip-test

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
