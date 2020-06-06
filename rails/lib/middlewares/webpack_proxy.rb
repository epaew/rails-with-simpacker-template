# frozen_string_literal: true

require 'rack/proxy'

class WebpackProxy < Rack::Proxy
  def perform_request(env)
    request = Rack::Request.new(env)

    if request.path.match?(%r{^/(packs|sockjs-node)})
      webpack_dev_server = URI(ENV.fetch('WEBPACK_DEV_SERVER_HOST'))

      env['HTTP_HOST'] = "#{webpack_dev_server.host}:#{webpack_dev_server.port}"
      super(env)
    else
      @app.call(env)
    end
  end
end
