require File.expand_path(File.dirname(__FILE__) + '/../rails_helper')

describe StaticPagesController do
  describe 'get /' do
    it 'returns a list of parks as JSON' do
      get :home
      expect(response).to be_success
    end
  end
end