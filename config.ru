require 'rack/jekyll'
run Rack::Jekyll.new(auto: true, force_build: true)
