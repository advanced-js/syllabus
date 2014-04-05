# variation of https://github.com/gjtorikian/html-proofer#in-a-script

require 'html/proofer'
require 'html/pipeline'

# make an out dir
FileUtils.rm_rf('out')
Dir.mkdir("out")

pipeline = HTML::Pipeline.new [
  HTML::Pipeline::MarkdownFilter,
  HTML::Pipeline::TableOfContentsFilter
], :gfm => true

# iterate over files, and generate HTML from Markdown
Dir.glob("**/*") do |path|
  dir = File.dirname(path)
  destination = "out/#{dir}/"
  FileUtils.mkdir_p(destination)

  if File.extname(path) == ".md"
    contents = File.read(path)
    result = pipeline.call(contents)

    html_path = path.sub(/\.md$/, '.html')
    File.open("out/#{html_path}", 'w') do |file|
      file.write(result[:output].to_s)
    end
  elsif File.file?(path)
    FileUtils.cp(path, destination)
  end
end

# test your out dir!
HTML::Proofer.new("./out").run
