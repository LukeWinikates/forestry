require File.expand_path(File.dirname(__FILE__) + '/../rails_helper')

describe ParksController do
  describe 'get' do
    it 'returns a list of parks as JSON' do
      get :index
      expect(response).to be_success
      expect(response.body).to include('El Paso')
    end
  end
end