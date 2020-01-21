#!/usr/bin/python

from bs4 import BeautifulSoup, Tag, Comment
import sys

headSnippet = """(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W59SWTR');"""

iframeSrc = "https://www.googletagmanager.com/ns.html?id=GTM-W59SWTR"


 
# load the file
def patch(filepath):
    try:
        with open(filepath) as inf:
            txt = inf.read()
            # soup = BeautifulSoup(txt, 'html.parser')
            soup = BeautifulSoup(txt, "html5lib")
        # insert head snippet into the document
        #mydivs = soup.findAll('script', class_="gtm", limit=1)
        #if len(mydivs)==0:
        mydiv = soup.head.find('script', { 'class': 'gtm' })
        if not mydiv:
            scrTag = Tag(soup, name = 'script')
            scrTag['class'] = "gtm"
            scrTag.string = headSnippet
            soup.head.insert(0, Comment('End Google Tag Manager'))
            soup.head.insert(0, scrTag)
            soup.head.insert(0, Comment('Google Tag Manager'))
            #scrTag.insert_before(Comment('Google Tag Manager'))
            #scrTag.insert_after(Comment('End Google Tag Manager'))

            # insert body snippet into the document
            iframeTag = Tag(soup, name = 'iframe')
            iframeTag['src'] = iframeSrc
            iframeTag['height'] = "0"
            iframeTag['width'] = "0"
            iframeTag['style'] = "display:none;visibility:hidden"

            noscrTag = Tag(soup, name = 'noscript')
            noscrTag['class'] = 'gtm'
            noscrTag.insert(0, iframeTag)
            soup.body.insert(0, Comment('End Google Tag Manager (noscript)'))
            soup.body.insert(0, noscrTag)
            soup.body.insert(0, Comment('Google Tag Manager (noscript)'))
            #noscrTag.insert_before(Comment('Google Tag Manager (noscript)'))
            #noscrTag.insert_after(Comment('End Google Tag Manager (noscript)'))

        # save the file again
        with open(filepath, 'w') as outf:
            outf.write(soup.prettify(formatter='html'))

    except IOError as e:
        print "I/O error({0}): {1}".format(e.errno, e.strerror)
        return -1
    except:
        print "Unexpected error:", sys.exc_info()[0]
        return -2
    print "Analytics Patched Successfully"
    return 0


if __name__=='__main__':
    patch(sys.argv[1])
