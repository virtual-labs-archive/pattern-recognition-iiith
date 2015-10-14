package MyPackage;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.awt.geom.Point2D;
import java.awt.geom.Point2D.Double.*;
import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.text.DecimalFormat;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import javax.swing.DefaultComboBoxModel;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.GroupLayout.ParallelGroup;
import javax.swing.GroupLayout.SequentialGroup;
import javax.swing.ImageIcon;
import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.LayoutStyle;
import javax.swing.LayoutStyle.ComponentPlacement;
import javax.swing.ListSelectionModel;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.table.DefaultTableModel;

import org.jfree.chart.ChartPanel;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class Experiment1
  extends JApplet
{
  private JLabel best_feat;
  private JLabel class_name;
  private JPanel controls;
  private JLabel current;
  private JComboBox dataset_name;
  private JLabel f1_display;
  private JComboBox f1_select;
  private JTextField f1_text;
  private JLabel f2_display;
  private JComboBox f2_select;
  private JTextField f2_text;
  private JPanel graph;
  private JButton jButton1;
  private JButton jButton2;
  private JButton jButton3;
  private JLabel jLabel1;
  private JLabel jLabel2;
  private JLabel jLabel3;
  private JPanel jPanel1;
  private JLabel maximum;
  private JLabel status_text;
  private JScrollPane tablePanel;
  private JLabel target;
  Chart1 chart;
  JTable dataTable;
  double[][] data;
  ImageIcon[] img;
  int n;
  int m;
  int n_test;
  String[] classNames;
  String[] featureNames;
  double target_acc;
  double max_acc;
  Point2D[] test;
  Point2D[] train;
  
  public void init()
  {
    try
    {
      EventQueue.invokeAndWait(new Runnable()
      {
        public void run()
        {
          Experiment1.this.initComponents();
          Experiment1.this.dataTable = new JTable()
          {
            public Class getColumnClass(int column)
            {
              return getValueAt(0, column).getClass();
            }
          };
          Experiment1.this.dataTable.setRowHeight(30);
          Experiment1.this.dataTable.setRowSelectionAllowed(true);
          Experiment1.this.dataTable.getSelectionModel().addListSelectionListener(new Experiment1.RowListener());
          Experiment1.this.tablePanel.setViewportView(Experiment1.this.dataTable);
        }
      });
    }
    catch (Exception ex)
    {
      ex.printStackTrace();
    }
  }
  
  private void initComponents()
  {
    this.jPanel1 = new JPanel();
    this.graph = new JPanel();
    this.controls = new JPanel();
    this.jLabel1 = new JLabel();
    this.dataset_name = new JComboBox();
    this.jButton1 = new JButton();
    this.jLabel2 = new JLabel();
    this.jLabel3 = new JLabel();
    this.f1_select = new JComboBox();
    this.f2_select = new JComboBox();
    this.jButton2 = new JButton();
    this.status_text = new JLabel();
    this.f2_display = new JLabel();
    this.f1_display = new JLabel();
    this.f1_text = new JTextField();
    this.f2_text = new JTextField();
    this.jButton3 = new JButton();
    this.target = new JLabel();
    this.current = new JLabel();
    this.maximum = new JLabel();
    this.class_name = new JLabel();
    this.best_feat = new JLabel();
    this.tablePanel = new JScrollPane();
    
    getContentPane().setLayout(new GridLayout(2, 1, 10, 0));
    
    this.jPanel1.setLayout(new BorderLayout());
    
    this.graph.setPreferredSize(new Dimension(600, 400));
    this.graph.setRequestFocusEnabled(false);
    this.graph.setLayout(new GridLayout(1, 0));
    this.jPanel1.add(this.graph, "Center");
    
    this.controls.setPreferredSize(new Dimension(400, 400));
    
    this.jLabel1.setText("Dataset");
    
    this.dataset_name.setModel(new DefaultComboBoxModel(new String[] { "T1", "T2", "T3" }));
    
    this.jButton1.setText("Load");
    this.jButton1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment1.this.jButton1ActionPerformed(evt);
      }
    });
    this.jLabel2.setText("Feature 1");
    
    this.jLabel3.setText("Feature 2");
    
    this.f1_select.addItemListener(new ItemListener()
    {
      public void itemStateChanged(ItemEvent evt)
      {
        Experiment1.this.f1_selectItemStateChanged(evt);
      }
    });
    this.f2_select.addItemListener(new ItemListener()
    {
      public void itemStateChanged(ItemEvent evt)
      {
        Experiment1.this.f2_selectItemStateChanged(evt);
      }
    });
    this.jButton2.setText("Plot");
    this.jButton2.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment1.this.jButton2ActionPerformed(evt);
      }
    });
    this.status_text.setText("Status");
    this.status_text.addPropertyChangeListener(new PropertyChangeListener()
    {
      public void propertyChange(PropertyChangeEvent evt)
      {
        Experiment1.this.status_textPropertyChange(evt);
      }
    });
    this.status_text.hide();
    
    this.f2_display.setFont(new Font("DejaVu Sans", 1, 14));
    this.f2_display.setText("F2 :");
    
    this.f1_display.setFont(new Font("DejaVu Sans", 1, 14));
    this.f1_display.setText("F1 :");
    
    this.f1_text.setEditable(false);
    this.f1_text.setText("F1+F2");
    
    this.f2_text.setEditable(false);
    this.f2_text.setText("F1+F2");
    
    this.jButton3.setText("Test Features");
    this.jButton3.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment1.this.jButton3ActionPerformed(evt);
      }
    });
    this.target.setFont(new Font("DejaVu Sans", 1, 14));
    this.target.setText("Target Accuracy :");
    
    this.current.setFont(new Font("DejaVu Sans", 1, 14));
    this.current.setText("Current Accuracy :");
    
    this.maximum.setFont(new Font("DejaVu Sans", 1, 14));
    this.maximum.setText("Maximum Accuracy :");
    
    this.class_name.setFont(new Font("DejaVu Sans", 1, 14));
    this.class_name.setText("Class :");
    
    this.best_feat.setFont(new Font("DejaVu Sans", 1, 14));
    
    GroupLayout controlsLayout = new GroupLayout(this.controls);
    this.controls.setLayout(controlsLayout);
    controlsLayout.setHorizontalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.TRAILING, false).addGroup(GroupLayout.Alignment.LEADING, controlsLayout.createSequentialGroup().addComponent(this.jLabel3).addGap(18, 18, 18).addComponent(this.f2_select, 0, -1, 32767)).addGroup(GroupLayout.Alignment.LEADING, controlsLayout.createSequentialGroup().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jLabel2).addComponent(this.jLabel1)).addGap(18, 18, 18).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addComponent(this.f1_select, 0, -1, 32767).addComponent(this.dataset_name, 0, 208, 32767)))).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.f2_text, -1, 73, 32767).addComponent(this.f1_text, -1, 73, 32767).addComponent(this.jButton1, -2, 73, -2))).addGroup(controlsLayout.createSequentialGroup().addComponent(this.jButton2, -2, 165, -2).addGap(18, 18, 18).addComponent(this.jButton3, -1, 189, 32767))).addGap(1008, 1008, 1008)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.target, -1, 292, 32767).addGap(1088, 1088, 1088)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.class_name).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, 259, 32767).addComponent(this.status_text).addGap(1026, 1026, 1026)).addGroup(controlsLayout.createSequentialGroup().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addComponent(this.f1_display).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.f2_display).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED))).addContainerGap(358, 32767)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.current, -1, 292, 32767).addGap(1088, 1088, 1088)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.maximum, -1, 320, 32767).addGap(1060, 1060, 1060)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.best_feat, -1, 816, 32767).addGap(68, 68, 68)))));
    
    controlsLayout.setVerticalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel1).addComponent(this.dataset_name, -2, -1, -2).addComponent(this.jButton1)).addGap(18, 18, 18).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel2).addComponent(this.f1_select, -2, -1, -2).addComponent(this.f1_text, -2, -1, -2)).addGap(18, 18, 18).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel3).addComponent(this.f2_select, -2, -1, -2).addComponent(this.f2_text, -2, -1, -2)).addGap(18, 18, 18).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jButton2, -1, -1, 32767).addComponent(this.jButton3)).addGap(11, 11, 11).addComponent(this.target, -2, 23, -2).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.current, -2, 23, -2).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.maximum, -2, 23, -2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.best_feat, -2, 23, -2).addGap(24, 24, 24).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.class_name).addComponent(this.status_text)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.f1_display).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addComponent(this.f2_display).addGap(89, 89, 89)));
    
    this.jPanel1.add(this.controls, "East");
    
    getContentPane().add(this.jPanel1);
    getContentPane().add(this.tablePanel);
  }
  
  private void jButton1ActionPerformed(ActionEvent evt)
  {
    readFile(this.dataset_name.getSelectedItem().toString());
    
    this.graph.removeAll();
    this.f1_select.removeAllItems();
    this.f2_select.removeAllItems();
    
    String[] columnNames = new String[this.m + 1];
    columnNames[0] = "Image";
    columnNames[1] = "ImageID";
    columnNames[2] = "Class";
    for (int i = 3; i < this.m + 1; i++) {
      columnNames[i] = this.featureNames[(i - 3)];
    }
    Object[][] data_val = new Object[this.n][this.m + 1];
    for (int i = 0; i < this.n; i++)
    {
      data_val[i][0] = this.img[i];
      for (int j = 0; j < this.m; j++) {
        if ((j == 0) || (j == 1)) {
          data_val[i][(j + 1)] = Integer.valueOf((int)this.data[i][j]);
        } else {
          data_val[i][(j + 1)] = Double.valueOf(this.data[i][j]);
        }
      }
    }
    DefaultTableModel model = new DefaultTableModel(data_val, columnNames);
    this.graph.removeAll();
    this.chart = null;
    this.dataTable.setModel(model);
    this.target.setText("Target Accuracy :" + this.target_acc);
    this.current.setText("Current Accuracy :");
    this.maximum.setText("Maximum Accuracy :");
    this.class_name.setText("Class :");
    this.f1_display.setText("F1 :");
    this.f2_display.setText("F2 :");
    this.best_feat.setText("");
    for (int i = 0; i < this.m - 1; i++)
    {
      this.f1_select.addItem(this.featureNames[i]);
      this.f2_select.addItem(this.featureNames[i]);
    }
  }
  
  private void jButton2ActionPerformed(ActionEvent evt)
  {
    this.graph.removeAll();
    int f1 = this.f1_select.getSelectedIndex() + 1;
    int f2 = this.f2_select.getSelectedIndex() + 1;
    XYSeriesCollection x1 = populateData(f1, f2);
    
    this.f2_select.addItem("Useless");
    this.f2_select.removeItem("Useless");
    String f1_text_val = this.f1_select.getSelectedIndex() < this.m - 2 ? this.featureNames[this.f1_select.getSelectedIndex()] : this.f1_text.getText();
    String f2_text_val = this.f2_select.getSelectedIndex() < this.m - 2 ? this.featureNames[this.f2_select.getSelectedIndex()] : this.f2_text.getText();
    this.chart = new Chart1(x1, f1_text_val, f2_text_val, this.status_text);
    JPanel innerGraph = new ChartPanel(this.chart);
    this.graph.add(innerGraph);
  }
  
  private void status_textPropertyChange(PropertyChangeEvent evt)
  {
    String str = this.status_text.getText();
    String[] vals = str.split(" ");
    if (vals.length != 2) {
      return;
    }
    double d1 = Double.parseDouble(vals[0].split(":")[1]);
    double d2 = Double.parseDouble(vals[1].split(":")[1]);
    int f1 = this.f1_select.getSelectedIndex() + 1;
    int f2 = this.f2_select.getSelectedIndex() + 1;
    
    int i = 0;
    for (i = 0; i < this.n; i++)
    {
      double val1;
      
      if (f1 == this.m - 1)
      {
        String exp1 = this.f1_text.getText();
        for (int j = 1; j < this.m - 1; j++) {
          exp1 = exp1.replaceAll("F" + j, String.valueOf(this.data[i][(j + 1)]));
        }
        val1 = MathParser.parseEquation(exp1);
      }
      else
      {
        val1 = this.data[i][(f1 + 1)];
      }
      double val2;
     
      if (f2 == this.m - 1)
      {
        String exp2 = this.f2_text.getText();
        for (int j = 1; j < this.m - 1; j++) {
          exp2 = exp2.replaceAll("F" + j, String.valueOf(this.data[i][(j + 1)]));
        }
        val2 = MathParser.parseEquation(exp2);
      }
      else
      {
        val2 = this.data[i][(f2 + 1)];
      }
      if ((val1 == d1) && (val2 == d2)) {
        break;
      }
    }
    if (i == this.n) {
      return;
    }
    String f1_text_val = this.f1_select.getSelectedIndex() < this.m - 2 ? this.featureNames[this.f1_select.getSelectedIndex()] : this.f1_text.getText();
    String f2_text_val = this.f2_select.getSelectedIndex() < this.m - 2 ? this.featureNames[this.f2_select.getSelectedIndex()] : this.f2_text.getText();
    this.f1_display.setText(f1_text_val + " :" + d1);
    this.f2_display.setText(f2_text_val + " :" + d2);
    this.class_name.setText("Class :" + (int)this.data[i][1]);
    this.dataTable.setRowSelectionInterval(i, i);
    this.dataTable.scrollRectToVisible(this.dataTable.getCellRect(i, 0, false));
  }
  
  private void f1_selectItemStateChanged(ItemEvent evt)
  {
    if (this.f1_select.getSelectedIndex() == this.m - 2) {
      this.f1_text.setEditable(true);
    } else {
      this.f1_text.setEditable(false);
    }
  }
  
  private void f2_selectItemStateChanged(ItemEvent evt)
  {
    if (this.f2_select.getSelectedIndex() == this.m - 2) {
      this.f2_text.setEditable(true);
    } else {
      this.f2_text.setEditable(false);
    }
  }
  
  private void jButton3ActionPerformed(ActionEvent evt)
  {
    DecimalFormat df = new DecimalFormat("###.##");
    int positive = 0;
    for (int i = 0; i < this.n_test; i++)
    {
      HashMap<Integer, Double> temp = new HashMap();
      for (int j = 0; j < this.n; j++) {
        temp.put(Integer.valueOf(j), Double.valueOf(this.test[i].distance(this.train[j])));
      }
      ValueComparator bvc = new ValueComparator(temp);
      TreeMap<Integer, Double> sorted_map = new TreeMap(bvc);
      sorted_map.putAll(temp);
      int l = 0;
      int count1 = 0;int count2 = 0;
      for (Iterator i$ = sorted_map.keySet().iterator(); i$.hasNext();)
      {
        int j = ((Integer)i$.next()).intValue();
        if (l >= 3) {
          break;
        }
        if (this.data[j][1] == Integer.parseInt(this.classNames[0])) {
          count1++;
        } else {
          count2++;
        }
        l++;
      }
      int out;
     
      if (count1 > count2) {
        out = Integer.parseInt(this.classNames[0]);
      } else {
        out = Integer.parseInt(this.classNames[1]);
      }
      if (out == (int)this.data[(i + this.n)][1]) {
        positive++;
      }
    }
    double curr_acc = positive / this.n_test * 100.0D;
    this.current.setText("Current Accuracy :" + df.format(curr_acc) + "%");
    if (curr_acc > this.max_acc)
    {
      this.max_acc = curr_acc;
      this.maximum.setText("Maximum Accuracy :" + df.format(this.max_acc) + "%");
      String f1 = this.f1_select.getSelectedIndex() < this.m - 2 ? this.featureNames[this.f1_select.getSelectedIndex()] : this.f1_text.getText();
      String f2 = this.f2_select.getSelectedIndex() < this.m - 2 ? this.featureNames[this.f2_select.getSelectedIndex()] : this.f2_text.getText();
      this.best_feat.setText(f1 + " Vs " + f2);
    }
  }
  
  XYSeriesCollection populateData(int f1, int f2)
  {
    XYSeriesCollection xyDataset = new XYSeriesCollection();
    XYSeries series1 = new XYSeries(this.classNames[0]);
    XYSeries series2 = new XYSeries(this.classNames[1]);
    for (int i = 0; i < this.n + this.n_test; i++)
    {
      double val1;
     
      if (f1 == this.m - 1)
      {
        String exp1 = this.f1_text.getText();
        for (int j = 1; j < this.m - 1; j++) {
          exp1 = exp1.replaceAll("F" + j, String.valueOf(this.data[i][(j + 1)]));
        }
        val1 = MathParser.parseEquation(exp1);
      }
      else
      {
        val1 = this.data[i][(f1 + 1)];
      }
      double val2;
      
      if (f2 == this.m - 1)
      {
        String exp2 = this.f2_text.getText();
        for (int j = 1; j < this.m - 1; j++) {
          exp2 = exp2.replaceAll("F" + j, String.valueOf(this.data[i][(j + 1)]));
        }
        val2 = MathParser.parseEquation(exp2);
      }
      else
      {
        val2 = this.data[i][(f2 + 1)];
      }
      if (i >= this.n)
      {
        this.test[(i - this.n)] = new Point2D.Double(val1, val2);
      }
      else
      {
        this.train[i] = new Point2D.Double(val1, val2);
        if (this.data[i][1] == Double.parseDouble(this.classNames[0])) {
          series1.add(val1, val2);
        } else {
          series2.add(val1, val2);
        }
      }
    }
    xyDataset.addSeries(series1);
    xyDataset.addSeries(series2);
    return xyDataset;
  }
  
  void readFile(String dataset_name)
  {
    String path = "/Data/" + dataset_name + "/";
    readConfig(path);
    InputStream bis = null;
    try
    {
      bis = getClass().getResourceAsStream(path + "Data.txt");
      this.data = new double[this.n + this.n_test][this.m];
      this.img = new ImageIcon[this.n + this.n_test];
      try
      {
        InputStreamReader inR = new InputStreamReader(bis);
        BufferedReader buf = new BufferedReader(inR);
        int i = 0;
        String str;
        while ((str = buf.readLine()) != null)
        {
          String[] val = str.split("\t");
          for (int j = 0; j < val.length; j++) {
            this.data[i][j] = Double.parseDouble(val[j]);
          }
          URL url = getClass().getResource(path + "images/" + (int)this.data[i][0] + ".gif");
          this.img[i] = new ImageIcon(url);
          i++;
        }
      }
      finally
      {
        bis.close();
      }
    }
    catch (IOException e)
    {
      e.printStackTrace();
    }
    this.test = new Point2D.Double[this.n_test];
    this.train = new Point2D.Double[this.n];
  }
  
  void readConfig(String path)
  {
    InputStream bis = null;
    try
    {
      bis = getClass().getResourceAsStream(path + "Config.txt");
      try
      {
        InputStreamReader inR = new InputStreamReader(bis);
        BufferedReader buf = new BufferedReader(inR);
        this.classNames = new String[2];
        this.classNames[0] = buf.readLine();
        this.classNames[1] = buf.readLine();
        this.m = (Integer.parseInt(buf.readLine()) + 2);
        this.featureNames = new String[this.m - 1];
        for (int j = 2; j < this.m; j++) {
          this.featureNames[(j - 2)] = buf.readLine();
        }
        this.featureNames[(this.m - 2)] = "Custom";
        int temp = Integer.parseInt(buf.readLine());
        this.n = (Integer.parseInt(buf.readLine()) + temp);
        this.n_test = Integer.parseInt(buf.readLine());
        this.target_acc = Double.parseDouble(buf.readLine());
        this.max_acc = 0.0D;
      }
      finally
      {
        bis.close();
      }
    }
    catch (IOException e)
    {
      e.printStackTrace();
    }
  }
  
  public static void main(String[] args)
  {
    Experiment1 applet = new Experiment1();
    applet.init();
    JFrame frame = new JFrame("Pattern Recognition : Experiment 1 - Feature Extraction");
    frame.getContentPane().add(applet);
    
    frame.setDefaultCloseOperation(3);
    frame.setSize(500, 500);
    frame.pack();
    frame.setVisible(true);
  }
  
  class ValueComparator
    implements Comparator
  {
    Map base;
    
    public ValueComparator(Map base)
    {
      this.base = base;
    }
    
    public int compare(Object a, Object b)
    {
      if (((Double)this.base.get(a)).doubleValue() > ((Double)this.base.get(b)).doubleValue()) {
        return 1;
      }
      if ((Double)this.base.get(a) == (Double)this.base.get(b)) {
        return 0;
      }
      return -1;
    }
  }
  
  private class RowListener
    implements ListSelectionListener
  {
    private RowListener() {}
    
    public void valueChanged(ListSelectionEvent event)
    {
      if ((event.getValueIsAdjusting()) || (Experiment1.this.chart == null)) {
        return;
      }
      int id = Experiment1.this.dataTable.getSelectedRow();
      Experiment1.this.chart.mark(Experiment1.this.train[id].getX(), Experiment1.this.train[id].getY());
    }
  }
  
  final int k = 3;
}
