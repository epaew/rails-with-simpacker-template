# frozen_string_literal: true

if Rails.env.development?
  require Rails.root.join('lib/middlewares/webpack_proxy')
  Rails.application.config.middleware.insert_before ActionDispatch::Static, WebpackProxy
end
