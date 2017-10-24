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

Notice we don't use the `--webpack=WEBPACK` flag.

Start your rails server.

    bundle exec rails s

Visit localhost:3000.
