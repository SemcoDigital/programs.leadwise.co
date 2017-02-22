require 'rack/jekyll'
run Rack::Jekyll.new(auto: (ENV['RACK_ENV'] == 'development'), force_build: true)
