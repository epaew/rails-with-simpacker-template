# frozen_string_literal: true

RSpec.describe HomeController, type: :request do
  describe 'GET home#index' do
    subject(:get_root) { get root_path }

    it 'returns http ok' do
      get_root
      expect(response).to have_http_status :ok
    end
  end
end
